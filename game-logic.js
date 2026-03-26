/* ===== DICE ROLLING ===== */
function rollDice() {
    if (isRolling || isMoving) return;

    isRolling = true;
    const diceDisplay = document.getElementById('diceFace');
    const rollButton = document.getElementById('rollButton');
    rollButton.disabled = true;

    let rolls = 0;

    const rollInterval = setInterval(() => {
        diceDisplay.textContent = Math.floor(Math.random() * 6) + 1;
        rolls++;

        if (rolls >= 15) {
            clearInterval(rollInterval);

            const rawDice = Math.floor(Math.random() * 6) + 1;
            diceDisplay.textContent = rawDice;

            const oilCount = teams[currentTeamIndex].collectedTiles.length;

            let finalDice = rawDice - oilCount;
            if (finalDice < 0) finalDice = 0;

            // ⏱️ Delay 1s trước khi trừ penalty
            setTimeout(() => {

                // Show penalty animation
                if (oilCount > 0) {
                    showDicePenalty(oilCount);
                }

                // ⏱️ Chờ animation penalty
                setTimeout(() => {
                    diceDisplay.textContent = finalDice;

                    isRolling = false;

                    // ❗ Dice = 0 → không di chuyển
                    if (finalDice === 0) {
                        rollButton.disabled = false;
                        return;
                    }

                    // ⏱️ Delay trước khi move
                    setTimeout(() => {
                        moveTeam(currentTeamIndex, finalDice);
                        rollButton.disabled = false;
                    }, 500);

                }, oilCount > 0 ? 800 : 0);

            }, 1000);
        }
    }, 100);
}

/* ===== SHOW DICE PENALTY ===== */
function showDicePenalty(penalty) {
    const penaltyEl = document.getElementById('dicePenalty');
    penaltyEl.textContent = '-' + penalty;
    penaltyEl.classList.add('active');

    setTimeout(() => {
        penaltyEl.classList.remove('active');
    }, 1000);
}

/* ===== MOVE TEAM ===== */
async function moveTeam(teamIndex, diceValue) {
    isMoving = true;

    const team = teams[teamIndex];
    const currentPosition = team.position;
    const isReturning = team.isReturning;

    let targetPosition;

    // Movement direction
    if (isReturning) {
        targetPosition = currentPosition - diceValue;
        if (targetPosition < 0) targetPosition = 0;
    } else {
        targetPosition = currentPosition + diceValue;
        if (targetPosition > 32) targetPosition = 32;
    }

    // Move to initial position
    team.position = targetPosition;
    await animateIconMovement(teamIndex, targetPosition);
    await sleep(400);

    // Jump logic
    let jumpCount = 0;
    const maxJumps = teams.length + 5;

    if (isReturning) {
        while (
            (isPositionOccupied(targetPosition, teamIndex) ||
                (typeof usedTiles !== 'undefined' && usedTiles.has(targetPosition))) &&
            targetPosition > 0 &&
            jumpCount < maxJumps
        ) {
            await showJumpAnimation();

            targetPosition--;
            team.position = targetPosition;

            await animateIconMovement(teamIndex, targetPosition);
            await sleep(300);

            jumpCount++;
        }
    } else {
        while (
            (isPositionOccupied(targetPosition, teamIndex) ||
                (typeof usedTiles !== 'undefined' && usedTiles.has(targetPosition))) &&
            targetPosition < 32 &&
            jumpCount < maxJumps
        ) {
            await showJumpAnimation();

            targetPosition++;
            team.position = targetPosition;

            await animateIconMovement(teamIndex, targetPosition);
            await sleep(300);

            jumpCount++;
        }
    }

    isMoving = false;
    canAnswerQuiz = true;

    // Check team status after movement
    if (typeof checkTeamStatus === 'function') {
        checkTeamStatus();
    }
}

/* ===== CHECK OCCUPIED ===== */
function isPositionOccupied(position, excludeTeamIndex) {
    return teams.some((team, index) =>
        index !== excludeTeamIndex && team.position === position
    );
}

/* ===== JUMP ANIMATION ===== */
function showJumpAnimation() {
    return new Promise(resolve => {
        const jumpOverlay = document.getElementById('jumpOverlay');
        jumpOverlay.classList.add('active');

        setTimeout(() => {
            jumpOverlay.classList.remove('active');
            resolve();
        }, 800);
    });
}

/* ===== MOVE ICON ===== */
function animateIconMovement(teamIndex, newPosition) {
    return new Promise(resolve => {

        renderTeamIcons();

        // Handle surface (position 0)
        if (newPosition === 0) {
            const surface = document.getElementById("surfaceZone");
            if (surface) {
                surface.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        } else {
            const button = document.querySelector(`[data-field="${newPosition}"]`);
            if (button) {
                button.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }

        setTimeout(resolve, 600);
    });
}

/* ===== SLEEP ===== */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* ===== EVENT CARDS ===== */
function getRandomEventCard() {
    return EVENT_CARDS[Math.floor(Math.random() * EVENT_CARDS.length)];
}
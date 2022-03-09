// Crie um programa que verifica a velocidade de um veículo em uma estrada com velocidade máxima de até 70km/h.

// Regras:
// A cada 5km/h acima da velocidade máxima, a carteira do motorista recebe 1 ponto.
// Se a carteira chegar a possuir 12 pontos ela será suspensa.

function checkSpeed(speed) {
    const maxSpeed = 70;
    const kmPerPoint = 5;
    if (typeof speed !== "number" || speed < 0)
        return "Por favor, informe uma velocidade válida em km/h.";
    else if (speed <= maxSpeed)
        return `Você está viajando a ${speed}km/h, continue respeitando a velocidade máxima de 70km/h.`;
    else if (speed > maxSpeed && speed <= 130) {
        const points = Math.floor((speed - maxSpeed) / kmPerPoint);
        if (points === 1)
            return `Você levou ${points} ponto na carteira.`;
        return `Você levou ${points} pontos na carteira.`;
    } else return "Sua carteira foi suspensa!";
}

console.log(checkSpeed(75));
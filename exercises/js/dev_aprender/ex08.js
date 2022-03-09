// Calcule a média de nota escolar a partir dos dados passados por um array e seguindo a tabela de notas abaixo.

// Tabela de Notas Escolares:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 50-59: E
// 0-49: F

const allGrades = [70, 70, 80];

function studentAverage(grades) {
    const average = calculateAverage(grades)
    console.log(`A média do(a) aluno(a) é de: ${average}`);
    if (average < 49) return `O(A) aluno(a) tirou nota: F`;
    if (average < 59) return `O(A) aluno(a) tirou nota: E`;
    if (average < 69) return `O(A) aluno(a) tirou nota: D`;
    if (average < 79) return `O(A) aluno(a) tirou nota: C`;
    if (average < 89) return `O(A) aluno(a) tirou nota: B`;
    return `O(A) aluno(a) tirou nota: A`;
}

function calculateAverage(allGrades) {
    let sum = 0;
    for (let value of allGrades)
        sum += value;
    return (sum / allGrades.length).toFixed(2);
}

console.log(studentAverage(allGrades));
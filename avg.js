var avgS = [
    clss1 = [
        { name: 'A', grade: 2.00 },
        { name: 'B', grade: 3.00 },
        { name: 'C', grade: 2.10 },
        { name: 'D', grade: 2.30 },
        { name: 'E', grade: 2.10 },
        { name: 'F', grade: 2.50 },
        { name: 'G', grade: 1.00 }
    ],
    clss2 = [
        { name: 'A', grade: 2.01 },
        { name: 'B', grade: 3.50 },
        { name: 'C', grade: 2.10 },
        { name: 'D', grade: 2.30 },
        { name: 'E', grade: 2.10 },
        { name: 'F', grade: 2.50 },
        { name: 'G', grade: 1.00 }
    ]
]
var avg = 0;
for (x in clss1) {
    avg = avg + clss1[x].grade
}
avg = avg / clss1.length
console.log(avg.toFixed(2))
avg = 0
for (y in clss2) {
    avg = avg + clss2[y].grade
}
avg = avg / clss2.length
console.log(avg.toFixed(2)) 
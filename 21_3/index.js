function pascalTriangle1(rowCount) {
    if (rowCount === 0) { return [] }
    if (rowCount === 1) { return [[1]] }
    const rows = [[1], [1, 1]];
    var prevRow = rows[1];
    for (let n = 1; n < rowCount - 1; n += 1) {
        const row = [1];
        let val = prevRow[0];
        for (let k = 0; k < prevRow.length - 1; k += 1) {
            row.push(val + (val = prevRow[k + 1]));
        }
        row.push(1);
        rows.push(row);
        prevRow = row;
    }
    return rows;
}
console.log(pascalTriangle1(5))

// TODO orange massage
// ? blue
// ! red
// * green

// grey out
// // grey twice


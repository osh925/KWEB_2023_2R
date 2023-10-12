function factorial(n, total = 1) {
    if(!n) return total;
    return factorial (n-1, n*total);
}

function permutation(n, r){
    return factorial(n) / factorial(n - r);
}

function combination(n, r){
    return factorial(n) / (factorial(n - r) * factorial(r));
}

function multiCombination(n, r){
    return combination(n + r - 1, r);
}

function multiPermutation(n, r){
    return n**r;
}


module.exports = {
    combination, permutation, multiCombination, multiPermutation,
};
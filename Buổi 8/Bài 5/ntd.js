function chenChuoi(s1, s2, p) {
    let vtc = Math.max(0, Math.min(p, s1.length));
    let pt = s1.slice(0, vtc);
    let ps = s1.slice(vtc);
    let ans = pt.concat(s2, ps);
    return ans;
}


console.log(chenChuoi("000", "abc", 2)); 
console.log(chenChuoi("000", "abc", -100)); 
console.log(chenChuoi("000", "abc", 100)); 
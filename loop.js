//factorial
let n = 5;

let ans = 1;

for(let i=1; i<=5; i++)
{
    ans = ans*i;
}

let i = 1;
while(i<=n){
    ans =ans*i;
    i++;
}

console.log(ans);

//continue, break
for(let i=1; i<=n; i++)
{
    if(i == 2){
        break;
    }
    ans += i;

}
console.log(ans);

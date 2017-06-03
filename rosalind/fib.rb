# usage:	fib.rb n k		

n, k = ARGV[0].to_i, ARGV[1].to_i

fib = [1, 1, k + 1]

for i in 3..n-1
	fib.push(fib[i-2] * k + fib[i-1])
end	
puts(fib.last)

 
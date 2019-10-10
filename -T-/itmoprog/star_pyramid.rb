while true
	puts("Enter pyramid's height:")
	height = Integer(gets.chomp) rescue -1
	break if height >= 1 and height <= 20
	puts("Height should be an integer between 1 and 20")
end
(1..height).reverse_each do |i| 
	puts(" " * (height - i) + "*" * (2 * i - 1))
end
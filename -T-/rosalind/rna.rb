# usage:	[another program output | ] ruby rna.rb [ < file]		

ARGF.each do |i|
	puts(i.to_s.gsub(/T/, "U"))
end

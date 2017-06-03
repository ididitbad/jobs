# usage:	[another program output | ] ruby dna_to_rna.rb [ < file]		

ARGF.each do |i|
	puts(i.to_s.gsub(/T/, "U"))
end
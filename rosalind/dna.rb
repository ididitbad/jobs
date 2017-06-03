# usage:	[another program output | ] ruby dna.rb [ < file]		

ARGF.each do |i|
	dna = i.to_s
	printf("%i %i %i %i\n", dna.count("A"), dna.count("C"), dna.count("G"), dna.count("T"))
end

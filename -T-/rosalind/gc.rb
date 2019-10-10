# usage:	[another program output | ] ruby gc.rb [ < file]		

min_id = tmp_id = dna = ""
min_perc = 0.0

ARGF.each do |i|
	str = i.to_s.chomp
	dna += str if ARGF.eof?
	if str.start_with?(">") or ARGF.eof?
		tmp_perc = dna.count("CG").to_f / dna.length.to_f * 100
		if tmp_perc > min_perc
			min_perc = tmp_perc
			min_id = tmp_id
		end
		tmp_id = str[1..str.length]
		dna = ""
	else
		dna += str
	end
end

puts(min_id)
puts(min_perc)
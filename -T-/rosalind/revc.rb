# usage:	[another program output | ] ruby revc.rb [ < file]		

ARGF.each do |i|
	puts(i.to_s.gsub(/[ATGC]/, "A" => "T", "T" => "A", "G" => "C", "C" => "G").reverse)
end

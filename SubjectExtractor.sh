#!/bin/bash

dir=./data

cat "$dir/$1" | grep "course-number-title-separator" | tr -d '\n' | sed -e 's/'$1'<\/span>/\n'$1'<\/span>/g' | sed -e 's/<\/span>.*class="course-number">/ /g' | sed -e 1d > tmp1.txt
cat tmp1.txt | grep "<span>Prerequisite(s):</span>" > tmp2.txt
cat tmp1.txt | grep -v "<span>Prerequisite(s):</span>" > tmp3.txt

len1=$(wc -l < tmp1.txt)
len2=$(wc -l < tmp2.txt)
len3=$(wc -l < tmp3.txt)

if [ $((len2 + len3 -1)) = $len1 ]
then
	cat tmp2.txt | sed -e 's/<\/span>.*class="course-title">/\n/g' -e 's/<\/span>.*<span>Prerequisite(s):<\/span> <span>/\n/g' -e 's/<\/span> <span>/\n/2' -e 's/<\/span> <span>//' -e 's/<\/span>.*$//' >> tmp4

	cat tmp3.txt | sed -e 's/<\/span>.*class="course-title">/\n/g' -e 's/<\/span>.*class="row course-summary-paragraph">//' -e 's/<span>//' -e 's/<span>//' -e 's/<span>/<desstart>/' -e 's/<div.*<desstart>/\n\n/' -e 's/<\/span>.*$//' >> no_prereq_classes.txt

	len4=$(wc -l < prereq_classes.txt)
	len5=$(wc -l < no_prereq_classes.txt)

	echo $((len2*4))
	echo $((len3*4))
	
	if [ $((len2*4)) = $len4 ] && [ $((len3*4)) = $len5 ]
	then
		echo "$1 parse success"
		exit 0
	else
		echo "Error: secondary parsing fail"
		exit 1
	fi
	
else 
	echo "Error: tmp2 and 3 line mismatch"
	exit 1
fi

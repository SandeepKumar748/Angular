// 6. convert array of letters to array of words
		const inputArr = [ 
				'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't'
				];
	//    output = ['bake','cake','eat'];


    //    let output = []

       let output = inputArr.reduce((curr, next) => {
                if(next != '') curr += next
                else {
                    curr += ' '
                }
                return curr
       }, '').split(' ')


       console.log(output);
       

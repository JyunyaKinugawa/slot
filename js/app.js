$(function(){
	//画像データを配列に持たせる
	let img = ["./img/japan.png","./img/italy.jpg","./img/germany.jpg"];

	//画像切り替え、表示させ続ける
	let pane1 = setInterval(function(){
		rand1 = Math.floor(Math.random()*img.length);
		$('.main-panel1').children('img').attr('src',img[rand1]);
	} , 500);
	let pane2 = setInterval(function(){
		rand2 = Math.floor(Math.random()*img.length);
		$('.main-panel2').children('img').attr('src',img[rand2]);
	} , 500);
	
	let pane3 = setInterval(function(){
		rand3 = Math.floor(Math.random()*img.length);
		$('.main-panel3').children('img').attr('src',img[rand3]);
	} , 500);

	//画像ストップ
	$('.btn1').click(function(ele){
			clearInterval(pane1);
			
	});
	$('.btn2').click(function(ele){
		clearInterval(pane2);
		check_slot();

	});
	$('.btn3').click(function(ele){
		clearInterval(pane3);
		end_slot();
	});
	
	//第2停止ボタンを押した際の処理
	//画像を動かす
	//リーチ演出
	function check_slot(){
		if(img[rand1]==img[0] && img[rand2]==img[0]){
			console.log("0");
		}else if(img[rand1]==img[1] && img[rand2]==img[1]){
			console.log("1");
		}else if(img[rand1]==img[2] && img[rand2]==img[2]){
			console.log("2");
		}
	}
	//第3停止ボタンを押した際の画像判定
	//アクションをつける
	//ボーナス確定演出
	function end_slot(){
		if(img[rand1]==img[0] && img[rand2]==img[0] && img[rand3]==img[0]){
			$('.japan_history').fadeIn(500).toggleClass('japan_history_display');
			clearInterval(window);
		}else if(img[rand1]==img[1] && img[rand2]==img[1] && img[rand3]==img[1]){
			$('.italy_history').fadeIn(500).toggleClass('italy_history_display').animate({});
			clearInterval(window);
		}else if(img[rand1]==img[2] && img[rand2]==img[2] && img[rand3]==img[2]){
			$('.german_history').fadeIn(500).toggleClass('german_history_display').animate({});
			clearInterval(window);
		}else{
			console.log("NG");
		}
	}
	//特定のボタンを押したらwindowのloadが入るようにする
	$('.replay_btn').on('click',function(){
			window.location.reload();
	});
});


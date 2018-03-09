var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 新手教學
	function main(tutorialN) {
		
		///確定教學狀態
		if(tutorialN == 1){
			
				rply.text =  '歡迎來到梅里歐斯的世界 \
				\n\
				\n我和GM會負責引導你適應這裡 \
				\n首先，請告訴我你在這個世界的名子吧\
				\n 再從以下武器中挑選一個自己喜歡的武器吧\
				\n\
				\n 木劍[劍],木短杖[短杖],木長杖[長杖],木弓[弓],普通筆記本[書]\
				\n 不同的武器在配合對應技能時會有額外加乘喔!\
				\n 可參考本說明\
				\n 武器適性一覽表:\
				\n https://docs.google.com/document/d/1_oUPgsk_bbkqVaYqARYdQ5pmSDYRvb4FTypZkjotJJY/edit';
				
			
		}else if(tutorialN == 2){
			
			rply.text =  '每個一般人都會有三種基本素質 \
				\n\
				\n Hp mp atk\
				\n Hp 掌管你的生命力\
				\n Mp是施放技能所需的能量\
				\n Atk是你的通常攻擊力\
				\n 一般人都會有以下的基本能力值\
				\n hp20/mp20/atk5\
				\n目前你唯一的招式叫做通常攻擊:\
				\n通常攻擊\
				\n所需mp:0\
				\n速度:+0\
				\n給與敵方單體等同自身攻擊力值的傷害，恢復自身Mp最大值x0.1的Mp\
				\n\
				\n 那麼，請試著打倒新人訓練官看看\
				\n\
				\n 新人訓練官\
				\nHp:15\
				\nMp:30\
				\nAtk:2\
				\n裝備武器:木劍\
				\n裝備飾品:無\
				\n裝備紋章:無\
				\n同行夥伴:無\
				\n\
				\n技能書:\
				\n斬擊/治癒/火球';
			
		}else if(tutorialN == 3){
			
			rply.text =  '技能說明\
				\n 斬擊:\
				\n  所需mp:10\
				\n  適性武器:劍\
				\n  速度:+0\
				\n  給與敵方單體自身攻擊力x(1d4+1)/2傷害\
				\n-----\
				\n 火球:\
				\n所需mp:10\
				\n適性武器:短杖、長杖、書\
				\n速度:+0\
				\n給與對手自身攻擊力+1d5點傷害，對象有20%機率燒傷3回合\
				\n\
				\n強化1:給與自身攻擊力x(1d3+1)/2的傷害，有40%機會賦予燒傷3回合\
				\n-----\
				\n  治癒:\
				\n所需mp:15\
				\n適性武器:無\
				\n速度:+0\
				\n恢復自身隊友一名(或自己)1d10+自身最大HPx0.1\
				\n\
				\n強化3:恢復我方全體(包含自己)(自身最大HPx1d4/2)點Hp\
				\n\
				\n  做好覺悟後開始戰鬥吧!';
			
		}else if(tutorialN == 4){
			
			rply.text =  '流程說明\
				\n\
				\n (1)雙方「一起」回報Hp,Mp\
				\n  當前Hp/最大Hp\
				\n  當前Mp/最大Mp\
				\n \
				\n (2)先喊者先決定自己要做的行動(喊招式名即可)\
				\n (3)後喊者先決定自己要做的行動(喊招式名即可)\
				\n (4)計算速度差(先喊者速度-後喊者速度)\
				\n  先喊者還會獲得「先發制人」的加成:該次行動速度+10\
				\n (5)先喊者擲(速度判定 自己的速度和 對手的速度和)決定出招先後\
				\n (6)依照判定結果輪流按照自己的招式行動\
				\n  如果使用技能跟裝備武器對應的話，技能消耗會減半喔(適性技能)\
				\n\
				\n (7)回到(1)，開始進行下一回合\
				\n\
				\n持續戰鬥直到打倒訓練官吧!';
			
		}else if(tutorialN == 5){
			
			rply.text =  '恭喜!你打倒了新人訓練官\
				\n\
				\n接下來，你可以從新手訓練官中，選擇一本你喜歡的技能書\
				\n 斬擊:\
				\n  所需mp:10\
				\n  適性武器:劍\
				\n  速度:+0\
				\n  給與敵方單體自身攻擊力x(1d4+1)/2傷害\
				\n-----\
				\n 火球:\
				\n所需mp:10\
				\n適性武器:短杖、長杖、書\
				\n速度:+0\
				\n給與對手自身攻擊力+1d5點傷害，對象有20%機率燒傷3回合\
				\n\
				\n強化1:給與自身攻擊力x(1d3+1)/2的傷害，有40%機會賦予燒傷3回合\
				\n-----\
				\n  治癒:\
				\n所需mp:15\
				\n適性武器:無\
				\n速度:+0\
				\n恢復自身隊友一名(或自己)1d10+自身最大HPx0.1\
				\n\
				\n強化3:恢復我方全體(包含自己)(自身最大HPx1d4/2)點Hp\
				\n-----\
				\n 精準射擊:\
				\n所需mp:10\
				\n適性武器:弓\
				\n速度:+0\
				\n給與敵方自身攻擊力x1d2x0.5的傷害\
				\n\
				\n之後有1d2x20%的機會再給與自身攻擊力x1.5的傷害\';
			
		}else if(tutorialN == 6){
			
			rply.text =  '很好，現在你有第一個技能了\
				\n順帶一提，每名玩家最多裝備三個主動技能跟一個被動技能\
				\n隨著遊戲進度，慢慢組成自己的技能組吧\
				\n\
				\n接下來\
				\n試著打倒新人訓練官2吧\
				\n 新人訓練官2\
				\nHp:20\
				\nMp:30\
				\nAtk:2\
				\n裝備武器:木劍\
				\n裝備飾品:無\
				\n裝備紋章:無\
				\n同行夥伴:無\
				\n\
				\n技能書:\
				\n斬擊/治癒/火球';
			
		}else if(tutorialN == 7){
			
			rply.text =  '一般戰鬥中，先喊者要由擲骰決定\
				\n\
				\n 骰 [ccb 50 先喊]即可\
				\n 這次由GM判定';
			
		}else if(tutorialN == 8){
			
			rply.text =  '施放技能所需要的Mp，只要透過通常攻擊，就能恢復Mp最大值的0.1倍喔\
				\n  如果使用技能跟裝備武器對應的話，技能消耗會減半喔(適性技能)\
				\n\
				\n 具有詠唱的技能，每回合可以在行動之外詠唱一次該技能\
				\n\
				\n 擁有施法詠唱的技能，平常雖然不能直接使用，但是當詠唱一定回數後，就能夠使用具有強力效果的能力\
				\n\
				\n 擁有強化詠唱的技能，平常就能自在使用，但如果能詠唱指定回數的話，就能夠發揮更強力的效果\
				\n 要是在強化詠唱完成前就施放技能，詠唱回數會重置，請注意。\';
			
		}else if(tutorialN == 9){
			
			rply.text =  '恭喜!你打倒了新人訓練官2\
				\n\
				\n現在的你想必對遊戲有一定認知了\
				\n那麼是時候該讓你強化自己\
				\n現在你有10點基本能力點數可以分配\
				\n Hp每分配1點增加10\
				\n Mp每分配1點增加10\
				\n Atk每分配1點增加1\
				\n 想好之後，告訴我即可\
				\n 仔細考慮自己該怎麼分配這十點吧，一旦確定就不能更改喔';
			
		}else if(tutorialN == 10){
			
			rply.text =  '恭喜！你距離完成教學了只剩最後幾步了\
				\n\
				\n只是孤單一人冒險好像也不是滋味\
				\n那麼試著招募夥伴吧\
				\n\
				\n 進行夥伴招募的方法\
				\n 就是在這裡輸入[招募]即可\
				\n 試試看吧';
			
		}else if(tutorialN == 11){
			
			rply.text =  '恭喜！你得到你的第一位夥伴了\
				\n\
				\n和同伴一起冒險時\
				\n除了能力會追加以外，還能使用強力的[夥伴技能]喔\
				\n\
				\n 現在就和新手考試官進行對戰，體驗夥伴的力量吧！\
				\n 新人考試官\
				\nHp:60\
				\nMp:30\
				\nAtk:2\
				\n裝備武器:木劍\
				\n裝備飾品:無\
				\n裝備紋章:無\
				\n同行夥伴:無\
				\n\
				\n技能書:\
				\n斬擊/治癒/火球';
			
		}else if(tutorialN == 12){
			
			rply.text =  '恭喜你\
				\n\
				\n全部的新手教學都完成了\
				\n作為獎勵，將贈與你1000G金幣及5顆奇蹟石\
				\n\
				\n 而且\
				\n 再送你剩下的三本技能書\
				\n 就用這些技能踏上旅途吧！\
				\n 記得不定時確認自己的存檔\
				\n 看看自己擁有的東西喔\
				\n\
				\n 想看現行公告的話，輸入[公告]看看\
				\n 如果想了解所有指令，輸入[Help]或[幫助]看看\
				\n 想看現行活動的話，輸入[活動]看看\
				\n 想看主線任務的話，輸入[主線]看看(公測期間不開放)\
				\n 以上\
				\n 祝旅行愉快';
			
		}else if(tutorialN == null){
			
			rply.text =  '教學功能，請輸入對應教學編號';
			
		}else{
			
			rply.text =  '找不到教學編號['+ tutorialN + ']的教學喔';
			
		}
		
		return rply;
		
		
		///
		
	}
////////////////

module.exports = {
	main
};

var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 系統幫助
function Help() {
	rply.text =
	'【梅里歐斯的冒險者專用BOT】v1.10 \
	\n --傷害骰(a XdY+b)--\
	\n 如果輸入2d6+1　攻撃！\
	\n 就會輸出）2d6+1：攻撃  9[6+3]+1 = 10\
	\n 如上面一樣,在骰子數字後方隔空白位打字,可以進行發言。\
	\n 以下還有其他例子\
	\n 5 3D6 	：分別骰出5次3d6\
	\n 5B10：不加總的擲骰 會進行小至大排序 \
	\n 5B10 9：如上,另外計算其中有多少粒大過9 \
	\n 5U10 8：進行5D10 每骰出一粒8會有一粒獎勵骰 \
	\n 5U10 8 9：如上,另外計算其中有多少粒大過9 \
	\n--機率骰(ccb)--\
	\n CCb （目標値）：做出成功或失敗的判定\
	\n例）CCb 30　CCb 80\
	\n--速度判定--\
	\n 速度判定(速度) 判定者速度和 對手速度和\
	\n例）CCb 30　CCb 80\
	\n--Bot重要功能--\
	\n輸入 招募，就能確認當前的招募目錄\
	\n輸入 公告，就能確認當前的公告目錄\
	\n輸入 活動，就能確認當前的活動目錄\
	\n輸入 主線，就能確認目前開放的主線任務(暫不開放)\
	\n輸入 寶箱/開寶箱，就能確認你剛獲得的寶箱內容喔\
	\n輸入 祈願，就能進行每日祈願\
	\n輸入 重要資訊處，就能確認重要資訊\
	\n輸入 遊戲存檔，就能確認遊戲存檔\
	\n輸入 公會，就能確認公會相關機能\
	\n--Bot娛樂功能--\
	\n 占卜運氣功能 字句中包括運氣即可\
	\n 塔羅牌占卜 塔羅/大十字塔羅/每日塔羅牌/時間tarot 等關键字可啓動\
	\n 死亡FLAG：句子裡出現 Flag/flag 就能讓你輕鬆插旗\
	\n 如果呼叫空音的名子...好像會有事情發生？';
	
	return rply;
}

////////////////

module.exports = {
	Help:Help
};

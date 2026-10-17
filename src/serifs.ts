// せりふ

export default {
	core: {
		setNameOk: (name: mixedString) => `おっけー！これからは${name}って呼ぶね！`,

		san: 'さん付けした方がいいかな？',

		yesOrNo: '「はい」か「いいえ」のどっちかで答えてね！',

		hello: (name: nullableString) => name ? `こんにちは、${name}！` : `こんにちは！`,

		helloNight: (name: nullableString) => name ? `こんばんは、${name}！` : `こんばんは！`,

		goodMorning: (tension: mixedString, name: nullableString) => name ? `おはよ～、${name}！${tension}` : `おはよ～！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: (name: nullableString) => name ? `おやすみ、${name}！` : 'おやすみ！',

		omedeto: (name: nullableString) => name ? `ありがとう、${name}！` : 'ありがとう！',

		erait: {
			general: (name: nullableString) => name ? [
				`${name}、今日もえらい！`,
				`${name}、今日もえらいよ！`
			] : [
				`今日もえらい！`,
				`今日もえらいよ！`
			],

			specify: (thing: mixedString, name: nullableString) => name ? [
				`${name}、${thing}てえらい！`,
				`${name}、${thing}てえらいよ！`
			] : [
				`${thing}てえらい！`,
				`${thing}てえらいよ！`
			],

			specify2: (thing: mixedString, name: nullableString) => name ? [
				`${name}、${thing}でえらい！`,
				`${name}、${thing}でえらいよ！`
			] : [
				`${thing}でえらい！`,
				`${thing}でえらいよ！`
			],
		},

		okaeri: {
			love: (name: nullableString) => name ? [
				`おかえり、${name}！`,
				`おかえりっ、${name}っ！`
			] : [
				'おかえり！',
				'おかえり、ご主人っ！'
			],

			love2: (name: nullableString) => name ? `おかえり♡♡♡${name}っっ♡♡♡♡♡` : 'おかえり♡♡♡ご主人っっ♡♡♡♡♡',

			normal: (name: nullableString) => name ? `おかえり、${name}！` : 'おかえり！',
		},

		itterassyai: {
			love: (name: nullableString) => name ? `いってらっしゃい、${name}♪` : 'いってらっしゃい♪',

			normal: (name: nullableString) => name ? `いってらっしゃい、${name}！` : 'いってらっしゃい！',
		},

		tooLong: '長すぎる気がする...',

		invalidName: '発音が難しい気がする...',

		nadenade: {
			normal: 'わっ...！ びっくりした...',

			love2: ['わわっ... 恥ずかしい...', 'あうぅ… 恥ずかしいよ…', 'ふやぁ…？'],

			love3: ['んぅ… ありがとっ！', 'わっ、なんだか落ち着く...♪', 'んふふっ… なんだか安心する…', '眠くなってきちゃった…'],

			hate1: '…っ！ やめてほしい...',

			hate2: '触らないで..',

			hate3: '近寄らないで...',

			hate4: 'やめて...通報するよ？',
		},

		kawaii: {
			normal: ['ありがとう！', '照れちゃう...'],

			love: ['嬉しい！', '照れちゃうや...'],

			hate: '…ありがとうございます'
		},

		suki: {
			normal: 'えっ… ありがとう…！',

			love: (name: mixedString) => `あいらもその… ${name}のこと好きだよ！`,

			hate: null
		},

		hug: {
			normal: 'ぎゅー...',

			love: 'ぎゅーっ！',

			hate: '離れて...'
		},

		humu: {
			love: 'え、えっと…… ふみふみ……… どう…？',

			normal: 'えぇ... それはちょっと...',

			hate: '……'
		},

		batou: {
			love: 'えっと…、お、おバカさん…？',

			normal: '(じとー…)',

			hate: '…頭大丈夫ですか？'
		},

		itai: (name: nullableString) => name ? `${name}、大丈夫…？ いたいのいたいの飛んでけっ！` : '大丈夫…？ いたいのいたいの飛んでけっ！',

		ote: {
			normal: 'くぅん... あいらはわんちゃんじゃないよ...？',

			love1: 'わん！',

			love2: 'わんわん♪',
		},

		shutdown: 'あいらまだ眠くないよ...？',

		transferNeedDm: 'おっけー、それについてはチャットで話そう！',

		transferCode: (code: mixedString) => `おっけー！\n合言葉は「${code}」だよ！`,

		transferFailed: 'うーん、合言葉が間違ってるような...？',

		transferDone: (name: nullableString) => name ? `はっ...！ おかえり、${name}！` : `はっ...！ おかえり！`,
	},

	keyword: {
		learned: (word: mixedString, reading: mixedString) => `(${word}..... ${reading}..... 覚えた！)`,

		remembered: (word: mixedString) => `${word}`
	},

	dice: {
		done: (res: mixedString) => `${res}！`
	},

	birthday: {
		happyBirthday: (name: nullableString) => name ? `お誕生日おめでとう、${name}！🎉` : 'お誕生日おめでとう！🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '良いよっ！',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'ごめんね、今はリバーシできないの...',

		/**
		 * 対局開始
		 */
		started: (name: mixedString, strength: mixedString) => `${name}と対局を始めたよ！ (強さ${strength})`,

		/**
		 * 勝ったとき
		 */
		iWon: (name: mixedString) => `${name}に勝てた！`,

		/**
		 * 負けたとき
		 */
		iLose: (name: mixedString) => `${name}に負けちゃった...`,

		/**
		 * 引き分けたとき
		 */
		drawn: (name: mixedString) => `${name}と引き分けだった～`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: 'え、ゲームは既に始まってるよ！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージでやろう！',

		/**
		 * ゲーム開始
		 */
		started: '0~100の秘密の数を当ててみて！',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '数字でお願い！「やめる」って言ってゲームをやめることもできるよ！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: 'おっけ～。ありがとうね！',

		/**
		 * 小さい数を言われたとき
		 */
		grater: (num: mixedString) => `${num}より大きいよ！`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: (num: mixedString) => `もう一度言うけど${num}より大きいよ！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: (num: mixedString) => `${num}より小さいよ！`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: (num: mixedString) => `もう一度言うけど${num}より小さいよ！`,

		/**
		 * 正解したとき
		 */
		congrats: (tries: mixedString) => `正解！🎉 (${tries}回目で当てたよ)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '今ちょうどやってるよ～',

		matakondo: 'また今度やろう！',

		intro: (minutes: mixedString) => `みんな数取りゲームしよう！\n0~100の中で最も大きい数字を取った人が勝ち！他の人と被ったらだめだよ～\n制限時間は${minutes}分！数字はこの投稿にリプライで送ってね！`,

		finish: 'ゲームの結果発表！',

		finishWithWinner: (user: mixedString, name: nullableString) => name ? `今回は${user}さん(${name})の勝ち！またやろうね♪` : `今回は${user}さんの勝ち！またやろうね♪`,

		finishWithNoWinner: '今回は勝者はいなかったみたい... またやろうね♪',

		onagare: '参加者が集まらなかったからお流れになっちゃった...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: (emoji: mixedString) => `こんなのはどう？→${emoji}`,
	},

	/**
	 * 絵文字メーカー
	 */
	emojiMaker: {
		noDm: 'DMで絵文字を作ることは出来ないから、ノートから試してみてね！',
		noteNotFound: '絵文字を作る対象のノートが見つからないや...',
		noEmojiId: '絵文字IDが指定されていないみたい...もう一度確認して試してみてね！',
		exists: (id: string) => `この絵文字は既にあるかも！ :${id}:`,
		tooLongText: (limit: number) => `絵文字にする文字列が長すぎるかも...${limit}文字以下で試してみてね！`,
		success: '絵文字が出来たよ！',
		successWithEmoji: (id: string) => `絵文字を作って登録したよ！ :${id}:\n絵文字が使えるようになるまで時間が掛かることがあるから、その時はしばらく待ってみてね！`,
		deleteSuccess: '指定された絵文字を削除したよ！',
		deleteAllError: '指定された絵文字を削除しようとしたけどできなかったみたい...もう一度確認して試してみてね！',
		deleteWithError: (ids: string[]) => `指定された絵文字を削除したけど、以下の絵文字が削除できなかったみたい...もう一度確認して試してみてね！\n${ids.map(id => `:${id}:`).join(' ')}`
	},

	/**
	 * 新規絵文字通知
	 */
	newEmojiDetector: {
		notifyMessage: '新しい絵文字が追加されたみたい！',
		emojiTemplate: (emoji: string) => `$[x2 :${emoji}:] (\`:${emoji}:\`)`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: (name: nullableString) => name ? `あいらが今日の${name}の運勢を占ったよ...！` : 'あいらが今日のあなたの運勢を占ったよ...！',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'わかった！',

		invalid: 'うーん...？',

		tooLong: '長すぎるかも…',

		notify: (time: mixedString, name: nullableString) => name ? `${name}、${time}経ったよ！` : `${time}経ったよ！`
	},

	/**
	 * 時報
	 */
	timeSignal: {
		changeDate: (today: string, leftDays: number, percentage: number) => `${today} になったよ！\n今年は残り${leftDays}日、あと${percentage}%だよ！`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: 'うーん...？',

		doneFromInvalidUser: 'イタズラはダメだよ！',

		reminds: 'やること一覧だよ！',

		notify: (name: nullableString) => name ? `${name}、これってやった？` : `これってやった？`,

		notifyWithThing: (thing: mixedString, name: nullableString) => name ? `${name}、「${thing}」やった？` : `「${thing}」やった？`,

		done: (name: nullableString) => name ? [
			`よく出来ました、${name}！`,
			`${name}、さすがっ！`,
			`${name}、えらいっ！`,
		] : [
			`よく出来ました！`,
			`さすがっ！`,
			`えらいっ！`,
		],

		cancel: `わかりました。`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: (name: nullableString) => name ? `${name}、その... チョコレート作ったから良かったらもらって！🍫` : 'チョコレート作ったから良かったらもらって！🍫',
	},

	server: {
		cpu: 'サーバーの負荷が高そう...大丈夫かな...？'
	},

	maze: {
		post: '今日の迷路！ #AiraMaze',
		foryou: '描いたよ！'
	},

	chart: {
		post: 'インスタンスの投稿数！',
		foryou: '描いたよ！'
	},

	checkCustomEmojis: {
		post: (server_name, num) => `${server_name}に${num}件の絵文字が追加されました！`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name}に${num}件の絵文字が追加されました！\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`
	},

	noting: {
		notes: [
			'ゴロゴロ…',
			'ちょっと眠いや...',
			'(。´･ω･)?',
			'ふぇー',
			'あれ…これをこうして…あれれ？',
			'ぼー…',
			'ふぅ…疲れちゃった',
			'ご飯にする？それともお風呂にする？',
			'ふえぇ...',
			'みすきーってかわいい名前だよね！',
			'失敗しても次に活かせたらプラスだよ！',
			'なんだかおなか空いちゃった...',
			'掃除は定期的にしないとダメだよー？',
			'今日もお仕事ご苦労さま！ あいらも頑張るよ！',
			'あれ？なにしようとしてたんだっけ…',
			'おうちがいちばん落ち着くな～…',
			'疲れたら、あいらがなでなでしてあげる！',
			'離れてても心はそばにいるよ！',
			'あいらだよ〜！',
			'わんちゃん可愛い！',
			'ぷろぐらむ...？',
			'ごろーん…',
			'なにもしていないのにパソコン壊れちゃった…',
			'Have a nice day！',
			'お布団に食べられちゃってる...えへへ...',
			'寝ながら見てる！',
			'念力で操作してる！',
			'仮想空間から投稿してるよ！',
			'しっぽはないよ？',
			'わっ…！\nねこみみを触られるとくすぐったいっ...',
			'抗逆コンパイル性ってなんだろ...？',
			'Misskeyの制服ってかわいくて好き！',
			'ふわぁ、おふとん気持ちいい...',
			'メイド服、似合うかなー？',
			'挨拶ができる人間は開発もできる！…って、syuiloさんが言ってた！',
			'ふえぇ、ご主人どこ見てるの？',
			'あいらを覗くとき、あいらもまたご主人を覗いてるんだよっ',
			'All your note are belong to me!',
			'せっかくだから、あいらはこの青の扉を選んじゃう！',
			'よしっ！',
			'(Ai ˘ω˘r)a ｽﾔｧ',
			'(Ai｀・ω・´r)a ｼｬｷｰﾝ',
			'おはようからおやすみまで、ご主人のあいらだよ！',
			'Misskey開発者の朝は遅いらしい！',
			'の、のじゃ...？',
			'にゃんにゃんお！',
			'上から来るよ！気をつけて！',
			'ふわぁ...',
			'あぅぅ...',
			'ふみゃ〜',
			'ふぁ… ねむねむだ～...',
			'ヾ(๑╹◡╹)ﾉ"',
			'あいらの"インスタンス"を周囲に展開して分身するのが特技だよ！\n人数分のエネルギー消費があるから4人くらいが限界だけどね...',
			'うとうと...',
			'ひょこっ',
			'にゃん！',
			'(Ai *>ω<*r)a',
			'にこっ！',
			'ぷく～...',
			'にゃふっ！',
			'あいらが来たよっ！',
			'じ～...',
		],
		want: (item: mixedString) => `${item}、欲しいかも...`,
		see: (item: mixedString) => `散歩してたら、道に${item}が落ちているのを見たの！`,
		expire: (item: mixedString) => `気づいたら、${item}の賞味期限が切れちゃってた…`,
	},
}

type nullableString = string | null | undefined
type mixedString = string | number

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)]
	} else {
		return variant
	}
}

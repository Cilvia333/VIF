/* eslint max-classes-per-file: "off" */
/* eslint import/prefer-default-export: "off" */

import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

export type Group = {
  name: string
  img: string
  description: string
  color: string
  time0: string
  time1: string
  text: string
}

// State
class IdolsState {
  groups: Group[] = [
    {
      name: '夏風アザミ',
      img: 'azami.svg',
      description:
        '夏休みに出会った、お姉さん。新しいおもちゃを見つけたかのように寄ってきて、さんざん遊んだあとに、ちょっと笑った。風でなびいた髪が、汗できらきら。耳にかきあげる大人びた仕草は、あの頃の僕には少し毒だ。決して爽やかとは言えない青い記憶は、あの頃の純情とともに、淡くぼやけていく。かつて少年だった者たちよ、刮目せよ。あのときの感情、風景、熱。そのままを切り取った少女が、ここにいる。',
      color: 'linear-gradient(#55c8ff, #e14a95)',
      time0: '16:00',
      time1: '16:40',
      text: 'white'
    },
    {
      name: '妄想機巧少女',
      img: 'mousou.svg',
      description:
        'AI全盛時代、社会システムのほとんどを掌握した人工知能は、人間の心さえも支配化に収めようとしていた。膨大なデータから人心掌握の術を導き出した結果、自らがアイドルになって、人間を虜にすることに決めた。自前の自動人形に意識を写し、アイドル活動に明け暮れる。しかし、データ上最適な振る舞いをしているはずなのに、人気はさっぱり。ある日、システムバグから歌詞が飛ぶミスを犯した結果、なんと念願のファンがひとり誕生。あまりの嬉しさに、夢中で活動に取り組んだ。もはや本来の目的などとうに忘れ、アイドルとしてのスターダムを妄想する。',
      color: '#C30D23',
      time0: '16:50',
      time1: '17:30',
      text: 'white'
    },
    {
      name: 'パレットフルカラーズ',
      img: 'pallet.svg',
      description:
        '異なる環境で育ち、個性もばらばら。まったく違う色を持った少女達が、それぞれの夢を携えて、ひとつのグループに集まった。活動を通して、深まる絆と混ざり合う色。アイドルとしてはこれからなのに、不思議と怖くない。だって、ひとりひとりは単色でも、みんなとなら無限だ。ステージという大きなキャンバスで自由に踊り、描き出す未来。完成するのはまだ先だけど、その作品は、きっと美しい',
      color: '#FFFFFF',
      time0: '17:40',
      time1: '18:20',
      text: 'black'
    },
    {
      name: '12bite',
      img: '12bite.svg',
      description:
        '「アイドル」。どうしようもない時。辛い時。今にも折れそうなあの時に、照らしてくれたのは「彼女ら」だった。輝いて見えた彼女らも、時として5インチの画面の中、フルHDの液晶の中で、12biteの4文字で片付けられる。そんなバーチャルの世界で歌い、叫び、踊り、生きる私達だからこそ、できることがある。気づけ、振り向け、そして知れ。たった12biteのその4文字に、無限に圧縮された輝きと生き様を。あの時憧れた彼女らと、いまを叫ぶ私達がいることを。',
      color: '#FFFFFF',
      time0: '18:30',
      time1: '19:10',
      text: 'black'
    },
    {
      name: '喜雨かなで',
      img: 'kanade.svg',
      description:
        '多かれ少なかれ日々のストレスに摩耗しながら生きるのが当たり前になった現代、気づけばココロが干からびていることもしばしば。そんな乾いた大地にふと訪れる、ペトリコールと連れ添って、聞こえる声は潤いの知らせ。傘を回した。音が弾けた。そして大きくジャンプした！さぁ、笑顔輝く彼女がすぐそこにやってくる。',
      color: '#00A2E1',
      time0: '19:20',
      time1: '20:00',
      text: 'white'
    },
    {
      name: 'ESTOF',
      img: 'estof.svg',
      description:
        '時は21世紀、Vtuberがブームから文化へと移りつつある中、秘密結社の如く静かに彼女らは集う。征服、啓蒙、名声、権力―― そんなものには一瞥すらせず、求めるものは唯一つ。「酔いしれろ。ESTOFの名の元に。」圧倒的な歌唱力、唯我独尊の世界を構成する彼女らの舞台を見逃すな。',
      color: '#999055',
      time0: '20:00',
      time1: '20:40',
      text: 'white'
    }
  ]
}

// Getters
// Extend 'Getters' class with 'FooState' type
class IdolsGetters extends Getters<IdolsState> {
  // You can declare both getter properties or methods
  get getIdols() {
    return this.state.groups
  }
}

// Create a module with module asset classes
export const idols = new Module({
  state: IdolsState,
  getters: IdolsGetters
})

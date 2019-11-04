<template>
  <div id="about" class="container">
    <div class="row japan-fonts">
      <div class="col-12 col-md-8 offset-md-2 my-5 border-bottom">
        <h1 class="mb-4 h3 text-muted d-block webfont">What is <span class="logo">TimeText</span>?</h1>
        <p class="text-center">
          突然ですが、「板書の写真を整理するのが面倒だな...」とか、
          「授業で一部、板書し忘れた...」なんて経験ありませんか？
          <span class="logo">TimeText</span>は自動板書管理サービスで、これらすべての悩みを解決できます！
          是非、以下で<span class="logo">TimeText</span>の機能を見てみてください！
        </p>
      </div>
      <div class="col-12 col-md-4">
        <h1 class="mt-2 h5 text-muted d-block webfont">Classify Picture</h1>
        <p class="text-center">
          黒板の写真を取ってこのサイトでアップロードするだけ！写真をアップロードした時間に合わせて自動的に授業ごとに写真を分類します。
        </p>
      </div>
      <div class="col-12 col-md-4">
        <h1 class="mt-2 h5 text-muted d-block webfont">Share Picture</h1>
        <p class="text-center">
          自分が写真をアップロードしたときの位置情報に基づいて自動的に授業の場所を調べ、
          他の人がその時限にその場所で取った写真を観覧できます。万が一寝坊して授業に行けなかった！
          とか板書をここの部分だけ撮り忘れた！
          となった場合でも安心です。
        </p>
      </div>
      <div class="col-12 col-md-4">
        <h1 class="mt-2 h5 text-muted d-block webfont">Location And Image</h1>
        <p class="text-center">
          位置情報は写真の場所をタグ付けするのにのみ用います。位置情報を用いなくても写真の分類機能はご利用になれますが、
          同じ場所で授業を受ける人の写真が見えなくなる可能性があります。（又は、精度が著しく落ちます。）
          また、このサイトでは画像アップロードサービスimgurを用いています。
        </p>
      </div>
      <div class="col-12 py-5 border-top mt-3">
        <h1 class="mb-4 h4 text-muted d-block webfont">Hou to Use?</h1>
        <p class="text-center">
         まずはログインしましょう！そうすると、一覧画面が出現します。
          また、「＋」ボタンから写真をアップできます。（基本的に授業開始時刻から休み時間の終わりまでを周期として分類します。）
          また、自分の上げた写真はホーム画面で時限を選択して取得します。
          時限選択欄の左のトグルをオンにすると他人の写真を含めて検索できます。
        </p>
      </div>
      <div class="col-12 py-5 border-top mt-3">
        <h1 class="mb-4 h4 text-muted d-block webfont">Attention</h1>
        <p class="text-center">
          写真をアップする際、著作権等の問題がないことを確認してから行って下さい。
        </p>
      </div>
      </div>
    <label>
      <router-link to="/" tag="button" class="float"><span class="my-float">戻る</span></router-link>
    </label>
  </div>
</template>

<style>
  .float{
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color: rgba(0, 129, 101, 0.78);
    color: white;
    border-radius:50px;
    text-align:center;
    z-index: 5;
  }
  .float:hover{
    cursor: pointer;
  }

  .my-float{
    margin-top:22px;
  }
</style>
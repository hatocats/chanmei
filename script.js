window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");
  
    // ローディング終了処理
    const hideLoading = () => {
      loading.style.display = "none"; // ローディング画面を非表示
      content.style.display = "block"; // メインコンテンツを表示
    };
  
    // ローディングを4秒後に終了
    setTimeout(hideLoading, 3000);
  
    // タイムアウト（5秒後に強制終了）
    setTimeout(() => {
      if (loading.style.display !== "none") {
        hideLoading();
      }
    }, 5000); // 5秒後に強制非表示
  });
  



  const slides = document.querySelectorAll(".slide");
  const slidesWrapper = document.querySelector(".slides");
  const thumbnailsContainer = document.querySelector(".thumbnails");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0;

  // サムネイルを自動生成
  slides.forEach((slide, index) => {
    const img = slide.querySelector("img");
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    thumbnail.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;

    // サムネイルクリック時のイベント
    thumbnail.addEventListener("click", () => moveToSlide(index));

    thumbnailsContainer.appendChild(thumbnail);
  });

  // サムネイルのアクティブ状態を更新
  const thumbnails = document.querySelectorAll(".thumbnail");

  function updateThumbnails() {
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle("active", index === currentIndex);
    });
  }

  // スライドの移動処理
  function moveToSlide(index) {
    gsap.to(slidesWrapper, {
      x: -index * 100 + "%", // 左に移動する距離を計算
      duration: 0.2,
      ease: "power2.out",
    });
    currentIndex = index;
    updateThumbnails();
  }

  // 左右ボタンのクリックイベント
  leftArrow.addEventListener("click", () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(newIndex);
  });

  rightArrow.addEventListener("click", () => {
    const newIndex = (currentIndex + 1) % slides.length;
    moveToSlide(newIndex);
  });

  // 初期状態のサムネイルを設定
  updateThumbnails();
  moveToSlide(currentIndex); // 初期表示の位置を設定

  const audio = document.getElementById("audio");
  const button = document.getElementById("play-button");

  // 再生する音声ファイルのリスト
  const sounds = ["sounds/ちゃあ.m4a", "sounds/ちゃちゃちゃ.m4a"];

  button.addEventListener("click", () => {
    // ランダムに音声ファイルを選択
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    audio.src = randomSound; // 選ばれた音声を設定

    // 再生処理
    audio.play().catch((error) => {
      console.error("再生エラー:", error);
    });
  });


  gsap.to("#img1", {
    x: 30,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "power1.inOut"
  });

  gsap.to(".char", {
    rotationX: 360, // Y軸を360度回転
    duration: 2, // アニメーションの長さ
    ease: "power1.inOut", // スムーズな動き
    repeat: -1, // 無限ループ
    yoyo: true, // 前後に動く
    repeatDelay: 3,
  });
document.addEventListener("DOMContentLoaded", function () {
    let yes = document.querySelector('.yes');
    let no = document.querySelector('.no');
    let open = document.querySelector('.open');
    let test = document.querySelector('.test');

    yes.addEventListener("click", function () {
        open.style.display = 'block';
        document.body.style.backgroundColor = '#E30079FF';
        document.body.style.backgroundImage = 'none';
        test.style.display = 'none'
        yes.style.display = 'none'
        no.style.display = 'none'
        createHearts();
    });

    no.addEventListener("mouseover", function () {
        let randomX = Math.max(0, Math.floor(Math.random() * (window.innerWidth - no.clientWidth)));
        let randomY = Math.max(0, Math.floor(Math.random() * (window.innerHeight - no.clientHeight)));
        no.style.position = "absolute";
        no.style.left = `${randomX}px`;
        no.style.top = `${randomY}px`;
    });

    function createHearts() {
        for (let i = 0; i < 10; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            document.body.appendChild(heart);
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.animationDuration = `${3 + Math.random() * 3}s`;

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }
});

        function createStars() {
            const starCount = 150; //
            const body = document.body;

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                // Random size (1px to 3px)
                const size = Math.random() * 3 + 'px';
                star.style.width = size;
                star.style.height = size;

                // Random position
                star.style.top = Math.random() * 100 + 'vh';
                star.style.left = Math.random() * 100 + 'vw';

                // Random slight opacity for depth
                star.style.opacity = Math.random();

                body.appendChild(star);
            }
        }

        // Run the function on load
        createStars();

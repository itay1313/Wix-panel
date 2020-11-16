window.addEventListener("DOMContentLoaded", (event) => {
    // console.log("loaded");
    const panelBtn = document.querySelector('#add-panel');
    const panelDefault = document.querySelector('#panel-default');
    const panelMedia = document.querySelector('#panel-media');
    const panelMediaLink = document.querySelector('#panel-media-link');
    const panelGallery = document.querySelector('#panel-gallery');
    const panelGalleryLink = document.querySelector('#panel-gallery-link');
    const closePanel = document.querySelectorAll('#close-panel');
    const stage = document.querySelector('#stage');
    const panelOne = document.querySelector('#bread-panel');
    const panelTwo = document.querySelector('#bread-media');
    const panelThree = document.querySelector('#bread-gallery');



    const allPanels = [panelDefault, panelMedia, panelGallery]

    function closePanels() {
        // Searching only elements with panel active
        const activePanels = document.querySelectorAll('.panel-active');

        activePanels.forEach(
            function(panel) {
                panel.classList.remove('panel-active');
                panel.classList.add('panel-inactive');
            }
        )
    }

    function changeClassActive(panel) {
        panel.classList.remove('panel-inactive');
        panel.classList.add('panel-active');
    }


    // Clicking on the Add plus button
    panelBtn.addEventListener("click", () => {

        // all panels with only inactive class
        if (panelDefault.classList.contains('panel-active')) {
            panelDefault.classList.remove('panel-active');
            panelDefault.classList.add('panel-inactive');
        } else {
            closePanels();
            changeClassActive(panelDefault);
            changeClassActive(panelOne);
        }

    })

    // Clicking on the media item in the panel list
    panelMediaLink.addEventListener("click", () => {
        closePanels();
        changeClassActive(panelMedia);
        changeClassActive(panelOne);
        changeClassActive(panelTwo);
    })

    // Clicking on the Gallery item in the panel list
    panelGalleryLink.addEventListener("click", () => {
        closePanels();
        changeClassActive(panelGallery);
        changeClassActive(panelOne);
        changeClassActive(panelTwo);
        changeClassActive(panelThree);
    })

    // Clicking on the Stage will close everything
    stage.addEventListener("click", () => {
        closePanels();
    })

    // Searching all closing buttons with the ID of close-panel
    closePanel.forEach(
        // Clicking on the close icon
        function(closingButton) {
            closingButton.addEventListener("click", () => {
                closePanels();
            })
        }
    )

});
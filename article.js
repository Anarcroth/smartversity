let selectionProps = { x: 0, y: 0, scrollY: 0, width: 0, selectedText: '' };

// Responses on any mouse up event.
// Controls solely the behaviour of the popover div.
const selectText = function() {
    selectionProps = getSelectionProps();
    const popover = document.getElementById('popover');

    if (selectionProps.width != 0 && selectionProps.selectedText != ' ') {

        popover.style.left = (selectionProps.x + selectionProps.width / 2 - popover.offsetWidth / 2) + 'px';
        popover.style.top = (selectionProps.y + selectionProps.scrollY) + 'px';
        setTimeout(() => {
            popover.style.left = (selectionProps.x + selectionProps.width / 2 - popover.offsetWidth / 2) + 'px';
            popover.style.top = (selectionProps.y + selectionProps.scrollY - popover.offsetHeight - 8) + 'px';
            popover.style.visibility = 'visible';

        }, 400);
    } else {
        popover.style.visibility = 'hidden';
    }
};

// Responses on clicking the like popover.
// Sends request to the server with the liked excerpt.
const sendEmail = function() {
    const popover = document.getElementById('popover');
    popover.style.visibility = 'hidden';

    // send some email through the back end
    console.log('Selected text:\n' + selectionProps.selectedText);
    xhrRequest('GET',
               `/artcl/save_liked_paragraph?likedParagraph=${selectionProps.selectedText}&articleTitle=${urlParams.get('id')}`)
        .then(resp => console.log(resp),
              err => console.trace(err.message));
};

const notaBene = function() {
    const popover = document.getElementById('popover');
    popover.style.visibility = 'hidden';

    // make a nota bene
    console.log('Selected text:\n' + selectionProps.selectedText);
    xhrRequest('GET',
               `/artcl/save_liked_paragraph?likedParagraph=${selectionProps.selectedText}&articleTitle=${urlParams.get('id')}`)
        .then(resp => console.log(resp),
              err => console.trace(err.message));
};

const hasQuestion = function() {
    const popover = document.getElementById('popover');
    popover.style.visibility = 'hidden';

    // ask a question
    console.log('Selected text:\n' + selectionProps.selectedText);
    xhrRequest('GET',
               `/artcl/save_liked_paragraph?likedParagraph=${selectionProps.selectedText}&articleTitle=${urlParams.get('id')}`)
        .then(resp => console.log(resp),
              err => console.trace(err.message));
};

// Responses on clicking the like button for the whole article.
// Sends request to the server with the id of the article.
const like = function(event) {
    xhrRequest('GET', `/artcl/save_liked_article?likedArticleTitle=${urlParams.get('id')}`);
};

// Gets the properties of the selected text only if the selection is solely from the articles text and it is nonempty.
//
// The properties fetched are:
// - The x,y coordinates of the topmost selection rectangle.
// - The scroll height at the moment of selection.
// - The width of the topmost selection rectangle.
// - The selected text only if it is solely from the article's text.
const getSelectionProps = function() {

    let selection, range, rects, rect;
    let x = 0,
        y = 0,
        scrollY = 0,
        width = 0,
        selectedText = selectionProps.selectedText;

    if (document.getSelection) {
        selection = document.getSelection();

        if (selection.rangeCount) {
            range = selection.getRangeAt(0).cloneRange();

            if (range.getClientRects && range.commonAncestorContainer.parentElement.id == 'textbook-text') {

                rects = range.getClientRects();
                if (rects.length > 0) {
                    rect = rects[0];
                }

                if (range.toString().length != 0 && rect) {
                    x = rect.left;
                    y = rect.top;
                    scrollY = window.scrollY;
                    width = rect.width;
                    selectedText = range.toString();
                    console.log(x,y,scrollY);
                }

            } else if (range.commonAncestorContainer.parentElement.id == 'textbook-text') {
                const span = document.createElement('span');
                console.log("else if span create element");
                if (span.getClientRects) {

                    // Ensure span has dimensions and position by
                    // adding a zero-width space character
                    span.appendChild(document.createTextNode('\u200b'));
                    range.insertNode(span);
                    rect = span.getClientRects()[0];

                    if (range.toString().length != 0 && rect) {
                        x = rect.left;
                        y = rect.top;
                        scrollY = window.scrollY;
                        width = rect.width;
                        selectedText = range.toString();
                    }

                    const spanParent = span.parentNode;
                    spanParent.removeChild(span);

                    // Glue any broken text nodes back together
                    spanParent.normalize();
                }
            }
        }
    }
    return { x: x, y: y, scrollY: scrollY, width: width, selectedText: selectedText };
};

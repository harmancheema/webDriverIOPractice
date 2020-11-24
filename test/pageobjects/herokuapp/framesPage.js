class framesPage {
    get header() {
        return $('//h3[contains(text(),"Frames")]')
    }

    get nestedFrames() {
        return $('//a[contains(text(),"Nested Frames")]')
    }

    get iFrame() {
        return $('//a[contains(text(),"iFrame")]')
    }

    get leftFrame() {
        return $('//body[contains(text(),"LEFT")]')
    }

    get middleFrame() {
        return $('//div[contains(text(),"MIDDLE")]')
    }

    get rightFrame() {
        return $('//body[contains(text(),"RIGHT")]')
    }

    get bottomFrame() {
        return $('//body[contains(text(),"BOTTOM")]')
    }

    get iFrameHeader() {
        return $('//h3[contains(text(),"An iFrame")]')
    }

    get iFrameBody() {
        return $('//div[@id="mceu_13"]')
    }

    get iFrameContent() {
        return $('//body[@id="tinymce"]')
    }

    get iFrameFileMenu() {
        return $('//span[contains(text(),"File")]')
    }

    get iFrameNewDocument() {
        return $('//span[contains(text(),"New document")]')
    }

    get iFrameEditMenu() {
        return $('//span[contains(text(),"Edit")]')
    }

    get iFrameUndoOption() {
        return $('//span[contains(text(),"Undo")]')
    }

    get iFrameRedoOption() {
        return $('//span[contains(text(),"Redo")]')
    }

    get iFrameCutOption() {
        return $('//span[contains(text(),"Cut")]')
    }

    get iFrameCopyOption() {
        return $('//span[contains(text(),"Copy")]')
    }

    get iFramePasteOption() {
        return $('//span[contains(text(),"Paste")]')
    }

    get iFrameSelectAllOption() {
        return $('//span[contains(text(),"Select all")]')
    }

    get iFrameViewMenu() {
        return $('//span[contains(text(),"View")]')
    }

    get iFrameVisualAidsOption() {
        return $('//span[contains(text(),"Visual aids")]')
    }

    get iFrameFormatMenu() {
        return $('//button[@id="mceu_18-open"]//span[contains(text(),"Format")]')
    }

    get iFrameBoldOption() {
        return $('//span[contains(text(),"Bold")]')
    }

    get iFrameItalicOption() {
        return $('//span[contains(text(),"Italic")]')
    }

    get iFrameUnderlineOption() {
        return $('//span[contains(text(),"Underline")]')
    }

    get iFrameStrikethroughOption() {
        return $('//span[contains(text(),"Strikethrough")]')
    }

    get iFrameSuperscriptOption() {
        return $('//span[contains(text(),"Superscript")]')
    }

    get iFrameSubscriptOption() {
        return $('//span[contains(text(),"Subscript")]')
    }

    get iFrameFormatsOption() {
        return $('//div[@id="mceu_53"]//span[contains(text(),"Formats")]')
    }

    get iFrameClearFormattingOption() {
        return $('//span[contains(text(),"Clear formatting")]')
    }

    get iFrameBox() {
        return $('//iFrame[@id="mce_0_ifr"]')
    }

}

module.exports = new framesPage()
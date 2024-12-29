"use client";

import { BlockNoteEditor, PartialBlock} from "@blocknote/core"
import { useCreateBlockNote} from "@blocknote/react";
import {BlockNoteView} from "@blocknote/mantine";
import { useEdgeStore } from "@/lib/edgestore";
import '@blocknote/core/style.css';
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";

interface EditorProps {
    onChange : (value : string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor = ({
    onChange,
    initialContent,
    editable
}: EditorProps) => {
    
    const {edgestore} = useEdgeStore();
    const {resolvedTheme} = useTheme();

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({file});

        return response.url;
    }

    const editor: BlockNoteEditor = useCreateBlockNote({
        initialContent: initialContent 
            ? JSON.parse(initialContent) as PartialBlock[] 
            : undefined,
        uploadFile: handleUpload,
    })
    const handleEditor = () =>{
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    }
    return (
        <div>
            <BlockNoteView
            editable={editable}
            editor={editor} 
            theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
            onChange={handleEditor}
            />
        </div>
    )
}

export default Editor;
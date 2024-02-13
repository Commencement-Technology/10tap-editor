import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import BridgeExtension from './base';

type HighlightEditorState = {
  activeHighlight: string | undefined;
};

type HighlightEditorInstance = {
  setHighlight: (color?: string) => void;
};

declare module '../types/EditorBridge' {
  interface BridgeState extends HighlightEditorState {}
  interface EditorBridge extends HighlightEditorInstance {}
}

export enum HighlightEditorActionType {
  SetHighlight = 'set-highlight',
}

type HighlightMessage = {
  type: HighlightEditorActionType.SetHighlight;
  payload: string | undefined;
};

export const HighlightBridge = new BridgeExtension<
  HighlightEditorState,
  HighlightEditorInstance,
  HighlightMessage
>({
  tiptapExtension: Highlight.configure({ multicolor: true }),
  tiptapExtensionDeps: [TextStyle],
  onBridgeMessage: (editor, { type, payload }) => {
    if (type === HighlightEditorActionType.SetHighlight) {
      editor
        .chain()
        .focus()
        .toggleHighlight({ color: payload || '' })
        .run();
    }

    return false;
  },
  extendEditorInstance: (sendBridgeMessage) => {
    return {
      setHighlight: (color) =>
        sendBridgeMessage({
          type: HighlightEditorActionType.SetHighlight,
          payload: color,
        }),
    };
  },
  extendEditorState: (editor) => {
    return {
      activeHighlight: editor.getAttributes('highlight').color,
    };
  },
});

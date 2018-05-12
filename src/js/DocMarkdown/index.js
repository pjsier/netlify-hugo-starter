import CMS from 'netlify-cms';
import GoogleDocsMarkdownControl from './GoogleDocsMarkdownControl'

const GoogleDocsMarkdownPreview = CMS.getWidget("markdown").preview;

if (typeof window !== 'undefined') {
  window.GoogleDocsMarkdownControl = GoogleDocsMarkdownControl
  window.GoogleDocsMarkdownPreview = GoogleDocsMarkdownPreview
}

export { GoogleDocsMarkdownControl, GoogleDocsMarkdownPreview }

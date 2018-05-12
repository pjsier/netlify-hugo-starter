import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import CMS from "netlify-cms";
import GooglePicker from './GooglePicker';

export default class GoogleDocsMarkdownControl extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    field: ImmutablePropTypes.map
  }

  render() {
    const developerKey = this.props.field.get('developerKey', '');
    const clientId = this.props.field.get('clientId', '');
    const appId = this.props.field.get('appId', '');
    const scope = 'https://www.googleapis.com/auth/drive.readonly';
    const MarkdownControl = CMS.getWidget("markdown").control;

    return (
      <div className="test">
        <h2>Testing Markdown Control</h2>
        <GooglePicker
          developerKey={developerKey}
          clientId={clientId}
          scope={[scope]}
          onChange={data => console.log('WORKED WITH DATA: ', data)}
          multiselect={false}
          navHidden={true}
          authImmediate={false}
          // mimeTypes={[]}
          viewId={'DOCS'}>
          <span>Click me!</span>
          <div className="google"></div>
        </GooglePicker>
        <MarkdownControl {...this.props} />
      </div>
    );
  }
}

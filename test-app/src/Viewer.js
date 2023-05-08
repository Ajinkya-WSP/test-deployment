import React from 'react';

const { Autodesk } = window;

const runtime = {
    options: null,
    ready: null
};

function initializeViewerRuntime(options) {
    if (!runtime.ready) {
        runtime.options = { ...options };
        runtime.ready = new Promise((resolve) => Autodesk.Viewing.Initializer(runtime.options, resolve));
    } else {
        if (['accessToken', 'getAccessToken', 'env', 'api', 'language'].some(prop => options[prop] !== runtime.options[prop])) {
            return Promise.reject('Cannot initialize another viewer runtime with different settings.')
        }
    }
    return runtime.ready;
}

class Viewer extends React.Component {
    constructor(props) {
        super(props);
        this.container = null;
        this.viewer = null;
    }

    componentDidMount() {
        initializeViewerRuntime(this.props.runtime || {})
            .then(_ => {
                this.viewer = new Autodesk.Viewing.GuiViewer3D(this.container);
                this.viewer.start();
                this.updateViewerState({});
            })
            .catch(err => console.error(err));
    }

    componentWillUnmount() {
        if (this.viewer) {
            this.viewer.finish();
            this.viewer = null;
        }
    }

    componentDidUpdate(prevProps) {
        if (this.viewer) {
            this.updateViewerState(prevProps);
        }
    }

    updateViewerState(prevProps) {
        if (this.props.urn && this.props.urn !== prevProps.urn) {
            Autodesk.Viewing.Document.load(
                'urn:' + this.props.urn,
                (doc) => this.viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()),
                (code, message, errors) => console.error(code, message, errors)
            );
        } else if (!this.props.urn && this.viewer.model) {
            this.viewer.unloadModel(this.viewer.model);
        }

        const selectedIds = this.viewer.getSelection();
        if (JSON.stringify(this.props.selectedIds || []) !== JSON.stringify(selectedIds)) {
            this.viewer.select(this.props.selectedIds);
        }
    }
    

    render() {
        return <div ref={ref => this.container = ref}></div>;
    }
}

export default Viewer;
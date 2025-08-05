import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen bg-black text-neon-green font-mono flex items-center justify-center">
            <div className="text-center border border-neon-green p-8 rounded-lg">
              <h2 className="text-2xl mb-4">⚠️ System Error</h2>
              <p className="text-gray-400 mb-4">Something went wrong. Please refresh the page.</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 border border-neon-green rounded hover:bg-neon-green/20 transition"
              >
                Reload Application
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

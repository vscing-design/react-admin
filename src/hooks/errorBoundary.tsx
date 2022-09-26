import React from 'react';

interface IProps {
  errorMessage: string;
  children: React.ReactNode;
}

interface IState {
  hasError: boolean;
}

// TODO 待官方hooks错误捕获方案
class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(
      '%c [ error, errorInfo ]-17',
      'font-size:13px; background:pink; color:#bf2c9f;',
      error,
      errorInfo
    );
    // 你同样可以将错误日志上报给服务器
    //logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>{this.props.errorMessage}</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

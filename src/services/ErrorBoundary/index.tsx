/**
 * 错误边界的粒度，可以将其包装在最顶层的路由组件中，并为用户展示一个 “xxx” 的错误信息，就像服务端框架经常处理崩溃一样。
 * 也可以将单独的组件包装在错误边界，从而保护其它组件不会崩溃。
 */
import { PureComponent } from 'react';

type ErrorBoundaryProps = {
  children: React.ReactElement;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    console.log(
      'getDerivedStateFromError',
      'font-size:13px; background:pink; color:#bf2c9f;',
      error
    );
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 你同样可以将错误日志上报给服务器
    console.log(
      'componentDidCatch',
      'font-size:13px; background:pink; color:#bf2c9f;',
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

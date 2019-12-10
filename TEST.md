# TEST
Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。

只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。

你可能认为需要单独的 effect 来执行清除操作。但由于添加和删除订阅的代码的紧密性，所以 useEffect 的设计是在同一个地方执行。如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
```javascript
useEffect(() => {

    function handleStatusChange(status) {

        setIsOnline(status.isOnline);

    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {

        ChatAPI.unsubscribeFromFriendStatus(

            props.friend.id,

            handleStatusChange

        );

    };

}, [props.friend.id]); // 仅在 [props.friend.id](http://props.friend.id) 发生变化时，重新订阅
```

```javascript
function foo() {
  console.log(this.a);
}

var a = 2;
var o = {a: 3, foo: foo};
var p = {a:4};

(p.foo = o.foo)();
```
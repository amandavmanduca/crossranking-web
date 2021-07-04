import { notification } from "antd";

type Props = {
    message?: string;
    description?: string;
}

export function successNotification({message, description}: Props) {
    notification.success({
      key: message,
      message: message,
      description: description,
      duration: 1,
      placement: 'topRight',
    });
}


export function infoNotification({message, description}: Props) {
    notification.info({
      key: message,
      message: message,
      description: description,
      duration: 1,
      placement: 'topRight',
    });
}



export function errorNotification({message, description}: Props) {
    notification.error({
      key: message,
      message: message,
      description: description,
      duration: 1,
      placement: 'topRight',
    });
}


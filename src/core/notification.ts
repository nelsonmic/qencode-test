import { Subject } from "rxjs";
import { curry } from "ramda";
import React from "react";

type AlertMessage =
  | { message: React.JSX.Element | string }
  | { title: string; message: React.JSX.Element | string };

type NotificationEvents = {
  kind: "toast";
  type: "success" | "error" | "warning" | "info";
  params: AlertMessage & { onClose?: () => void; autoHideDuration?: number };
};

export const NotificationSubject = new Subject<NotificationEvents>();

/**
 * Call Notify to show a toast notification
 */
export const notify = curry(
  (
    type: NotificationEvents["type"],
    args2: string | NotificationEvents["params"]
  ) => {
    if (typeof args2 === "string")
      return NotificationSubject.next({
        kind: "toast",
        type,
        params: { message: args2 },
      });

    NotificationSubject.next({ kind: "toast", type, params: args2 });
  }
);

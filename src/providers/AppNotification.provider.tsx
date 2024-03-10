"use client"
import { MessageBox } from "@/components/NotificationPopup";
import { NotificationSubject } from "@/core/notification";
import { SnackbarProvider, useSnackbar } from "notistack";
import React from "react";


type AlertColor = "info" | "success" | "warning" | "error" | "default";

function NotificationObserver() {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const sub = NotificationSubject.subscribe((evt) => {
      if (evt.kind === "toast") {
        if ("message" in evt.params) {
          const { message, ...others } = evt.params;
          enqueueSnackbar({
            message,
            variant: evt.type as AlertColor,
            ...others,
          });
        }
      }
    });

    return () => sub.unsubscribe();
  }, [enqueueSnackbar]);

  return null;
}

export const AppNotificationProvider: React.FC<{
  children: React.ReactNode;
}> = (props: any) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      preventDuplicate={true}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      Components={{
        success: makeAlert("success" as AlertColor),
        warning: makeAlert("warning" as AlertColor),
        info: makeAlert("info" as AlertColor),
        error: makeAlert("error" as AlertColor),
      }}
    >
      {props.children}
      <NotificationObserver />
    </SnackbarProvider>
  );
};

type SnackbarAlertProps = {
  message: string;
  id: string;
  onClose?: () => void;
};

const makeAlert = (severity: AlertColor) =>
  React.forwardRef<{}, SnackbarAlertProps & { title?: string }>(
    function SnackbarAlert(props, ref) {
      const { closeSnackbar } = useSnackbar();

      return (
        <MessageBox
          // @ts-ignore
          ref={ref}
          onClose={() => {
            props?.onClose?.();
            closeSnackbar(props.id);
          }}
          title={props?.title}
          variant={severity}
        >
          {props.message}
        </MessageBox>
      );
    }
  );

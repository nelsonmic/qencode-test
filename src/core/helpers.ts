import { notify } from "./notification";

type handleApiErrorOverload = {
      (value?: string): void;
      (value?: {}[]): void;
    };

export const handleApiError:handleApiErrorOverload = (value: unknown) => {
      const title = "Something went wrong!";
      
      if (typeof value === "string") {
            notify("error", {
                  title,
                  message: value
            })
          } else if (Array.isArray(value)) {
            const message = value[0].error
            notify("error", {
                  title,
                  message
            })
          }
}

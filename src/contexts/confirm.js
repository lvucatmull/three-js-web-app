import { Color, Modal, Text } from "src/assets";
import React, { createContext, useCallback, useMemo, useState } from "react";

const defaultValue = {
  confirm: true,
  title: "",
  content: "",
  hasClose: false,
  hasCancel: true,
  hasSpare: false,
  hasSubAction: false,
  hasSubMessage: false,
  confirmType: "primary",
  confirmLabel: "",
  cancelLabel: "",
  subActionLabel: "",
  subMessage: "",
  align: "left",
  onConfirm: () => {},
  onCancel: () => {},
};

export const ConfirmContext = createContext(defaultValue);

export function ConfirmProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState(defaultValue);

  const show = useCallback((options) => {
    setOpen(true);
    setConfirm(options);
  }, []);

  const hide = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(() => ({ show, hide }), [show, hide]);

  return (
    <ConfirmContext.Provider value={value}>
      {children}
      {open && (
        <Modal nested {...confirm}>
          <Text
            textAlign={confirm?.align}
            whiteSpace="pre-wrap"
            color={Color.DARKGRAY}
          >
            {confirm?.content}
          </Text>
        </Modal>
      )}
    </ConfirmContext.Provider>
  );
}

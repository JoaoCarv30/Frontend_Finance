import React from 'react'
import { toast, useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button";

const ToastOk = () => {
    return (
        <Button
            onClick={() => {
                toast({
                    title: "Scheduled: Catch up",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                })
            }}
        >
            Show Toast
        </Button>
    )
}

export default ToastOk
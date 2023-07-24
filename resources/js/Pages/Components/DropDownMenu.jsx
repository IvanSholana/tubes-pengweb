import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import AvatarDemo from "./Avatar";

function DropDownMenu() {
    return (
        <>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <AvatarDemo />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="min-w-[220px] bg-white rounded-md p-2 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                        sideOffset={5}
                        data-theme="light"
                    >
                        <button className="w-full text-start">
                            <DropdownMenu.Item>
                                {" "}
                                <p className="p-2">Your Profile</p>
                            </DropdownMenu.Item>
                        </button>
                        <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
                        <button className="w-full text-start">
                            <DropdownMenu.Item>
                                {" "}
                                <a href="/sesi/logout">
                                    <p className="p-2">Logout</p>
                                </a>
                            </DropdownMenu.Item>
                        </button>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </>
    );
}

export default DropDownMenu;

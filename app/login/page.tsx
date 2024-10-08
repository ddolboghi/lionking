import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import KakaoLoginButton from "@/components/login/KakaoLoginButton";

export default async function Login() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  if (user) {
    redirect("/");
  }

  return (
    <main className="flex flex-col justify-center gap-2 items-center text-center h-screen">
      <h1 className="font-semibold text-[40px]">환영합니다!</h1>
      <div className="flex flex-col gap-2">
        <KakaoLoginButton />
      </div>
    </main>
  );
}

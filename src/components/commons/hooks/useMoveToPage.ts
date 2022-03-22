import { useRouter } from "next/router";

export default function useMoveToPage() {
  const router = useRouter();

  const moveToHome = () => {
    router.push("/home");
  };

  return { moveToHome };
}

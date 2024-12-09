// "use client";

// import { loginSchema, LoginValues } from "@/lib/validation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useState, useTransition } from "react";
// import { useForm, FormProvider } from "react-hook-form";
// import { login } from "./loginActions";

// // Import required components
// import { 
//   FormField, 
//   FormItem, 
//   FormLabel, 
//   FormControl, 
//   FormMessage 
// } from "@/components/form"; // Adjust the path as necessary
// import { Input, PasswordInput } from "@/components/ui"; // Adjust the path as necessary
// import LoadingButton from "@/components/LoadingButton"; // Adjust the path as necessary

// export default function LoginForm() {
//     const [error, setError] = useState<string>();
//     const [isPending, startTransition] = useTransition();

//     const form = useForm<LoginValues>({
//         resolver: zodResolver(loginSchema),
//         defaultValues: {
//             username: "",
//             password: "",
//         }
//     });

//     async function onSubmit(values: LoginValues) {
//         setError(undefined);
//         startTransition(async () => {
//             const { error } = await login(values);
//             if (error) setError(error);
//         });
//     }

//     return (
//         <FormProvider {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
//                 {error && <p className="text-center text-destructive">{error}</p>}
                
//                 {/* Username Field */}
//                 <FormField
//                     control={form.control}
//                     name="username"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Username</FormLabel>
//                             <FormControl>
//                                 <Input placeholder="Username" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
                
//                 {/* Password Field */}
//                 <FormField
//                     control={form.control}
//                     name="password"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Password</FormLabel>
//                             <FormControl>
//                                 <PasswordInput placeholder="Password" type="password" {...field} />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
                
//                 <LoadingButton type="submit" className="w-full" loading={isPending}>Sign Up</LoadingButton>
//             </form>
//         </FormProvider>
//     );
// }

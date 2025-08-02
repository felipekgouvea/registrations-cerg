"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Phone } from "lucide-react";

const matriculaSchema = z.object({
  nomeAluno: z
    .string()
    .min(2, "Nome do aluno deve ter pelo menos 2 caracteres"),
  nomeResponsavel: z
    .string()
    .min(2, "Nome do responsável deve ter pelo menos 2 caracteres"),
  dataNascimento: z.string().min(1, "Data de nascimento é obrigatória"),
  serie: z.string().min(1, "Série é obrigatória"),
});

type MatriculaFormData = z.infer<typeof matriculaSchema>;

const FormDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<MatriculaFormData>({
    resolver: zodResolver(matriculaSchema),
    defaultValues: {
      nomeAluno: "",
      nomeResponsavel: "",
      dataNascimento: "",
      serie: "",
    },
  });

  const onSubmit = (data: MatriculaFormData) => {
    const message = `🎓 *SOLICITAÇÃO DE MATRÍCULA - CERG 2026*

👶 *Nome do Aluno(a):* ${data.nomeAluno}
👨‍👩‍👧‍👦 *Nome do Responsável:* ${data.nomeResponsavel}
📅 *Data de Nascimento:* ${data.dataNascimento}
📚 *Série:* ${data.serie}

---
Olá! Gostaria de iniciar o processo de matrícula para 2026. Aguardo contato para agendar uma visita e conhecer mais sobre a escola.

Obrigado(a)! 😊`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5527999151404?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setIsDialogOpen(false);
    form.reset();
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-xl"
        >
          Iniciar Processo de Matrícula
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-2">
            Iniciar Matrícula 2026
          </DialogTitle>
          <p className="text-center text-gray-600">
            Preencha os dados abaixo e entraremos em contato via WhatsApp
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="nomeAluno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Nome do Aluno(a) *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome completo do aluno(a)"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nomeResponsavel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Nome do Responsável *
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome completo do responsável"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dataNascimento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Data de Nascimento *
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">
                    Série que irá cursar *
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                        <SelectValue placeholder="Selecione a série" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="maternal-2">
                        Maternal II (3 anos)
                      </SelectItem>
                      <SelectItem value="1-periodo">PRÉ I (4 anos)</SelectItem>
                      <SelectItem value="2-periodo">PRÉ II (5 anos)</SelectItem>
                      <SelectItem value="1-ano">1º Ano</SelectItem>
                      <SelectItem value="2-ano">2º Ano</SelectItem>
                      <SelectItem value="3-ano">3º Ano</SelectItem>
                      <SelectItem value="4-ano">4º Ano</SelectItem>
                      <SelectItem value="5-ano">5º Ano</SelectItem>
                    </SelectContent>
                    <FormMessage />
                  </Select>
                </FormItem>
              )}
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Enviar via WhatsApp
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-semibold"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;

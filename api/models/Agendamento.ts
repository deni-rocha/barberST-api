import { model, Schema, Types } from "mongoose"

export interface IAgendamento {
  servico: Types.ObjectId
  usuario: Types.ObjectId
  data: Date
}

const agendamentoSchema = new Schema<IAgendamento>(
  {
    servico: { type: Schema.Types.ObjectId, ref: "Servico" },
    usuario: { type: Schema.Types.ObjectId, ref: "Usuario" },
    data: {
      type: Date,
      transform: (v: Date): string =>
        v.toLocaleDateString("pt-br", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      required: true,
    },
  },
  { timestamps: true },
)

const Agendamento = model<IAgendamento>("Agendamento", agendamentoSchema)

export default Agendamento

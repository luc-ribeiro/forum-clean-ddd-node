import { type QuestionsRepository } from '../repositories/questions-repository'

interface DeleteQuestionUseCaseRequest {
  authorId: string
  questionId: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DeleteQuestionUseCaseResponse {}

export class DeleteQuestionUseCase {
  constructor (
    private readonly questionsRepository: QuestionsRepository
  ) {}

  async execute ({
    authorId,
    questionId
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId)

    if (question == null) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed')
    }

    await this.questionsRepository.delete(question)

    return {}
  }
}

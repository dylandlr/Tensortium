from manim import *

class SelfAttentionExplainer(Scene):
    def construct(self):
        # Title
        title = Text("Self-Attention Mechanism", font_size=40)
        self.play(Write(title))
        self.wait(1)
        self.play(title.animate.to_edge(UP))

        # Create input sequence
        input_tokens = ["The", "cat", "sat"]
        input_rects = VGroup(*[
            Rectangle(height=0.8, width=1.5)
            for _ in input_tokens
        ]).arrange(RIGHT, buff=0.3).to_edge(LEFT)
        
        input_labels = VGroup(*[
            Text(token, font_size=24).move_to(rect)
            for token, rect in zip(input_tokens, input_rects)
        ])

        self.play(
            Create(input_rects),
            Write(input_labels)
        )

        # Show Query, Key, Value transformation
        query_arrow = Arrow(start=input_rects[1].get_right(), 
                          end=input_rects[1].get_right() + RIGHT * 2)
        query_label = Text("Query", font_size=20).next_to(query_arrow, UP)

        self.play(
            Create(query_arrow),
            Write(query_label)
        )

        # Show attention scores
        attention_scores = Matrix([["0.1", "0.7", "0.2"]], h_buff=1.2)
        attention_scores.next_to(query_arrow.get_end(), RIGHT)
        attention_label = Text("Attention Scores", font_size=20).next_to(attention_scores, UP)

        self.play(
            Write(attention_scores),
            Write(attention_label)
        )

        # Show weighted sum
        weighted_sum = Rectangle(height=0.8, width=1.5).next_to(attention_scores, RIGHT * 2)
        sum_label = Text("Weighted\nSum", font_size=20).next_to(weighted_sum, UP)

        self.play(
            Create(weighted_sum),
            Write(sum_label)
        )

        # Add mathematical formulas
        formula = MathTex(
            r"\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V"
        ).to_edge(DOWN)

        self.play(Write(formula))
        self.wait(2)